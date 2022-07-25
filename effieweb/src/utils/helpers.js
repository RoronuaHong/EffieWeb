import moment from 'moment'

export const listFormatDate = timestramp => 
  moment(timestramp).calendar()

export const noteFormatDate = timestramp => 
  moment(timestramp).format('ll')
