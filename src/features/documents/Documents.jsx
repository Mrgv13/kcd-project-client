import { Context } from '../../index'

import { createDocx } from '../../common/http/docx-api'

import ButtonMain from '../../common/components/button/ButtonMain'

import React, { useContext } from 'react'
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer'

import './style.scss'

const Documents = () => {
  const { user } = useContext(Context)
  const createD = () => {
    createDocx(user.user.id).then((data) => data)
    window.location.reload()
  }

  const docs = [{ uri: 'http://localhost:5051/sample.pdf' }]

  return (
    <div
      style={{
        paddingTop: '75px',
        paddingLeft: '300px',
        paddingRight: '300px',
      }}>
      <span className={'text__doc'}>Документы</span>
      <div className={'button__menu'}>
        <ButtonMain
          styleComponent={'light'}
          text={'Сформировать отчет по проектам'}
          onClick={createD}></ButtonMain>
        <a href={'http://localhost:5051/data.docx'}>Скачать word документ</a>
      </div>
      <DocViewer
        documents={docs}
        initialActiveDocument={docs[0]}
        pluginRenderers={DocViewerRenderers}
      />
    </div>
  )
}

export default Documents
