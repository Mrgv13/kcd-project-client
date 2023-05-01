import React from 'react'

import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer'

const Documents = () => {
  const docs = [
    { uri: require('./sample.pdf') },
    {
      uri: require('./Documentation of the REST API.docx'),
    },
  ]

  return (
    <div
      style={{
        paddingTop: '75px',
        paddingLeft: '300px',
        paddingRight: '300px',
      }}>
      Documents
      <DocViewer
        documents={docs}
        initialActiveDocument={docs[0]}
        pluginRenderers={DocViewerRenderers}
      />
    </div>
  )
}

export default Documents
