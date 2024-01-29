import { Fragment } from 'react'

import { useForm } from 'react-hook-form'

import Heading from '@/components/atoms/Heading/Heading'
import InputField from '@/components/molecules/InputField/InputField'
import Form from '@/components/organisms/Form/Form'
import PageLayout from '@/components/templates/PageLayout/PageLayout'

import { TReferralPageFormData, referralPageData } from '@/data/referral-page'

import styles from './ReferralPage.module.css'

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

  const formData: TReferralPageFormData[] = referralPageData.form || []
  const onSubmit = (data: TFormValues) => console.log(data)

  return (
    <section className={styles.referralPage}>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        {formData.map((data, dataIndex) => (
          <Fragment key={dataIndex}>
            {data.section && (
              <Heading level={2} className={data.section.className}>
                {data.section.label}
              </Heading>
            )}

            {data.fields?.map((field, fieldIndex) => {
              const inputProps = {
                ...field.input,
                register,
                errors,
                setFocus
              }

              return (
                <InputField
                  key={fieldIndex}
                  inputProps={inputProps}
                  labelProps={field.label}
                  labelContent={field.label?.text}
                />
              )
            })}
          </Fragment>
        ))}
      </Form>
    </section>
  )
}

const ReferralPage = (): JSX.Element => {
  return (
    <PageLayout>
      <PageContent />
    </PageLayout>
  )
}

export default ReferralPage
