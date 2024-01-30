import Button from '@/components/atoms/Button/Button'
import { TInputProps } from '@/components/atoms/Input/Input'
import { TLabelProps } from '@/components/atoms/Label/Label'

import { TCommonClassNameProps } from '@/types/common'

export type TReferralPageCommonData = TCommonClassNameProps & {
  title: string
}

export type TReferralPageData = {
  header: TReferralPageHeaderData
  columns: TReferralPageColumnsData[]
  form: TReferralPageFormData[]
}

export type TReferralPageHeaderData = {
  title: string
}

export type TReferralPageColumnsData = {
  header: string
  accessor: string
  cellRender?: (data: any) => JSX.Element
}

export type TReferralPageFormData = {
  section?: TReferralPageFormSectionData
  fields: TReferralPageFormFieldsData[]
}

export type TReferralPageFormSectionData = TReferralPageCommonData

export type TReferralPageFormFieldsData = {
  label?: TLabelProps
  input: TInputProps
}

export const referralPageData: TReferralPageData = {
  header: {
    title: 'Referral Builder'
  },
  columns: [
    { header: 'Given Name', accessor: 'givenName' },
    { header: 'Surname', accessor: 'surname' },
    { header: 'Email', accessor: 'email' },
    { header: 'Phone', accessor: 'phone' },
    {
      header: 'Actions',
      accessor: 'actions',
      cellRender(data) {
        return (
          <div>
            <Button onClick={() => console.log(data)}>Edit</Button>
            <Button onClick={() => console.log(data)}>Delete</Button>
          </div>
        )
      }
    }
  ],
  form: [
    {
      section: {
        title: 'Personal Details'
      },
      fields: [
        {
          label: {
            text: 'Given Name',
            htmlFor: 'firstName',
            className: ''
          },
          input: {
            id: 'firstName',
            type: 'text',
            name: 'firstName',
            required: true,
            autoFocus: true
          }
        },
        {
          label: {
            text: 'Surname',
            htmlFor: 'lastName',
            className: ''
          },
          input: {
            id: 'lastName',
            type: 'text',
            name: 'lastName',
            required: true
          }
        },
        {
          label: {
            text: 'Email',
            htmlFor: 'email',
            className: ''
          },
          input: {
            id: 'email',
            type: 'email',
            name: 'email',
            required: true
          }
        },
        {
          label: {
            text: 'Phone',
            htmlFor: 'phone',
            className: ''
          },
          input: {
            id: 'phone',
            type: 'tel',
            name: 'phone',
            required: true
          }
        }
      ]
    },
    {
      section: {
        title: 'Address',
        className: ''
      },
      fields: [
        {
          label: {
            text: 'Home Address',
            htmlFor: 'homeAddress',
            className: ''
          },
          input: {
            id: 'homeAddress',
            type: 'text',
            name: 'homeAddress',
            required: true
          }
        },
        {
          label: {
            text: 'Street',
            htmlFor: 'street',
            className: ''
          },
          input: {
            id: 'street',
            type: 'text',
            name: 'street',
            required: true
          }
        },
        {
          label: {
            text: 'Suburb',
            htmlFor: 'suburb',
            className: ''
          },
          input: {
            id: 'suburb',
            type: 'text',
            name: 'suburb',
            required: true
          }
        },
        {
          label: {
            text: 'State',
            htmlFor: 'state',
            className: ''
          },
          input: {
            id: 'state',
            type: 'text',
            name: 'state',
            required: true
          }
        },
        {
          label: {
            text: 'Postcode',
            htmlFor: 'postcode',
            className: ''
          },
          input: {
            id: 'postcode',
            type: 'number',
            name: 'postcode',
            required: true
          }
        },
        {
          label: {
            text: 'Country',
            htmlFor: 'country',
            className: ''
          },
          input: {
            id: 'country',
            type: 'text',
            name: 'country',
            required: true
          }
        }
      ]
    },
    {
      fields: [
        {
          input: {
            id: 'avatarUpload',
            type: 'file',
            name: 'avatar',
            accept: 'image/*',
            className: ''
          }
        },
        {
          input: {
            id: 'createReferral',
            type: 'submit',
            name: 'createReferral',
            value: 'Create Referral',
            className: ''
          }
        }
      ]
    }
  ]
}
