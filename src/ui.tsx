import {
  Button,
  Container,
  Inline,
  render,
  VerticalSpace,
  Text,
  Columns,
  Dropdown,
  Textbox,
  SearchTextbox,
  useInitialFocus,
  IconHyperlink16,
} from '@create-figma-plugin/ui'
import { h, JSX, Fragment } from 'preact'
import { useCallback, useState, useMemo, useEffect } from 'preact/hooks'
import { once, emit, saveSettingsAsync } from '@create-figma-plugin/utilities'
import { AddStringsHandler, SaveStringsToStorage } from './types'
import * as mobileStrings from './mobileStrings.json'
import getJsonFile from './fetch'
import styles from './styles.css'

function Plugin() {
  const style = {
    myinput: { 
      width: '100%',
      border: '1px solid #5b5b5b',
    },
    columns: {
      display: 'flex',
    },
    key: { 
      width: '100px',
      opacity: 0.4,
      margin: 0,
      lineHeight: 1.6,
      overflowWrap: 'anywhere',
      userSelect: 'text',
    },
    text: { 
      width: '100%',
      paddingLeft: '16px',
      margin: 0,
      lineHeight: 1.6,
      userSelect: 'text',
    },
    json: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '24px',
    }
  };
  
  const data = Object.entries(mobileStrings.en);
  const [message, setMessage] = useState('')
  const [value, setValue] = useState<string>('')
  const [results, setResults] = useState<Array<any>>([]);
  const [jsonValue, setJsonValue] = useState('https://raw.githubusercontent.com/dusan990/Copy-manager/main/src/json.json');

  const handleAddStrings = useCallback(
    function () {
      emit<AddStringsHandler>('UPDATEFIGMA')
    },[]
  )
  
  const search = () => {
    setResults([])
    
    data.filter(arr => {
      if( arr[0].toLowerCase().includes(value.toLowerCase()) || arr[1].toLowerCase().includes(value.toLowerCase()) ) {
        setResults(current => [...current, arr]);
      }
    })
  }

  onmessage = (event) => {
    return setMessage(event.data.pluginMessage)
  }
  
  return (
    <Container space="large">
      <VerticalSpace space="large" />

      <div className={styles.json}>
        <Textbox placeholder="JSON file link" value={jsonValue} icon={<IconHyperlink16 />} />
        <Button onClick={(e:any) => getJsonFile(jsonValue)} secondary>Upload</Button>
      </div>
      {/* <Dropdown disabled onChange={handleDropdown} options={dropdownOption} value="foo" /> */}
      
      <VerticalSpace space="large" />

      <div className={styles.json}>
        <SearchTextbox 
          onInput={e => setValue(e.currentTarget.value)}
          value={value}
          style={style.myinput}
        />

        <Button class="hello" onClick={search}>
          Search
        </Button>
      </div>

      {results?.map(item => (
        <Fragment>
          <VerticalSpace space="large" />
          <div style={style.columns}>
            <p style={style.key}>{item[0]}</p>
            <p style={style.text}>{item[1]}</p>
          </div>
        </Fragment>
      ))}
      
      <VerticalSpace space="large" />

      
      <Button fullWidth onClick={handleAddStrings}>
        Update strings
      </Button>
      <div>{message}</div>
      
    </Container>
  )
}

export default render(Plugin)
