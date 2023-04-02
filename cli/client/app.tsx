import React from 'react'
import { Mode } from "../common/const/mode"
import Routes, { RouterProps } from './router/index'

export default function App({ mode = Mode.CSR, url }: RouterProps) {
  return <Routes mode={mode} url={url} />
}
