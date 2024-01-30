import { Fragment, useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'

import Heading from '@/app/components/atoms/Heading/Heading'
import Table from '@/app/components/atoms/Table/Table'
import Header from '@/app/components/molecules/Header/Header'
import InputField from '@/app/components/molecules/InputField/InputField'
import Article from '@/app/components/organisms/Article/Article'
import Form from '@/app/components/organisms/Form/Form'
import Section from '@/app/components/organisms/Section/Section'
import PageLayout from '@/app/components/templates/PageLayout/PageLayout'

import {
  TReferralPageColumnsData,
  TReferralPageFormData,
  TReferralPageHeaderData,
  referralPageData
} from '@/server/data/referral-page'

import referralPageStyles from './ReferralPage.module.css'

export type TFormValues = Record<string, unknown>

const ReferralPage = (): JSX.Element => {
  const [referralData, setReferralData] = useState([])
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors }
  } = useForm<TFormValues>()

  const headerData: TReferralPageHeaderData = referralPageData.header || {}
  const columnsData: TReferralPageColumnsData[] = referralPageData.columns || []
  const formData: TReferralPageFormData[] = referralPageData.form || []

  const onSubmit = async (data: TFormValues) => {
    try {
      const response = await fetch('/api/referrals', {
        method: 'POST',
        body: JSON.stringify(data)
      })

      if (response.ok) {
        console.log('Referral created successfully')
      } else {
        console.error('Failed to create referral')
      }
    } catch (error) {
      console.error('Error submitting form', error)
    }
  }

  useEffect(() => {
    const fetchReferrals = async () => {
      const response = await fetch('/api/referrals')
      const data = await response.json()

      setReferralData(data)
    }

    fetchReferrals()
  }, [])

  return (
    <PageLayout className={referralPageStyles.pageLayout}>
      <Section className={referralPageStyles.section}>
        <Article className={referralPageStyles.sectionArticleForm}>
          {headerData.title && (
            <Header>
              <Heading level={2} className={referralPageStyles.headerHeading}>
                {headerData.title}
              </Heading>
            </Header>
          )}

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
        <Article className={referralPageStyles.sectionArticleTable}>
          <Table columns={columnsData} data={referralData} />
        </Article>
      </Section>
    </PageLayout>
  )
}

export default ReferralPage
