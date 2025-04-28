'use server'

import { ServerCreateTable } from './ServerCreateTable.js';

export async function submitForm(formData) {
  const colStart = formData.get('colStart')
  const colEnd = formData.get('colEnd')
  const rowStart = formData.get('rowStart')
  const rowEnd = formData.get('rowEnd')

  return ServerCreateTable(colStart, colEnd, rowStart, rowEnd);

}