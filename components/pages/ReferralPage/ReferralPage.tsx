import { Fragment } from 'react'

import { useForm } from 'react-hook-form'

import Heading from '@/components/atoms/Heading/Heading'
import Header from '@/components/molecules/Header/Header'
import InputField from '@/components/molecules/InputField/InputField'
import Article from '@/components/organisms/Article/Article'
import Form from '@/components/organisms/Form/Form'
import Section from '@/components/organisms/Section/Section'
import PageLayout from '@/components/templates/PageLayout/PageLayout'

import {
  TReferralPageCommonLabelData,
  TReferralPageFormData,
  referralPageData
} from '@/data/referral-page'

import referralPageStyles from './ReferralPage.module.css'

export type TFormValues = Record<string, unknown>

/**
 * Render the content of the referral page.
 * @returns The rendered content of the referral page.
 */
const PageContent = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors }
  } = useForm<TFormValues>()

  const headerData: TReferralPageCommonLabelData = referralPageData.header || {}
  const formData: TReferralPageFormData[] = referralPageData.form || []
  const onSubmit = (data: TFormValues) => console.log(data)

  return (
    <>
      {headerData.title && (
        <Header>
          <Heading level={2} className={referralPageStyles.headerHeading}>
            {headerData.title}
          </Heading>
        </Header>
      )}

      <Section className="space-y-12">
        <Article>
          <Form onSubmit={handleSubmit(onSubmit)} noValidate>
            {formData.map((data, dataIndex) => (
              <Fragment key={dataIndex}>
                {data.section && (
                  <Heading
                    level={2}
                    className={referralPageStyles.sectionArticleFormHeading}
                  >
                    {data.section.title}
                  </Heading>
                )}
                {data.fields?.map((field, fieldIndex) => (
                  <InputField
                    key={fieldIndex}
                    inputProps={{ ...field.input, register, errors, setFocus }}
                    labelProps={field.label}
                    labelContent={field.label?.text}
                  />
                ))}
              </Fragment>
            ))}
          </Form>
        </Article>
        <Article>
          <h1>henlo</h1>
        </Article>
      </Section>
    </>
  )
}

const ReferralPage = (): JSX.Element => {
  return (
    <PageLayout className={referralPageStyles.pageLayout}>
      <PageContent />
    </PageLayout>
  )
}

export default ReferralPage
