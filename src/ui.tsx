import {
  Button,
  Container,
  render,
  VerticalSpace,
  Text,
  Columns,
  SearchTextbox,
  useInitialFocus
} from '@create-figma-plugin/ui'
import { h, JSX, Fragment } from 'preact'
import { useCallback, useState, useMemo, useEffect } from 'preact/hooks'
import { emit } from '@create-figma-plugin/utilities'
import { AddStringsHandler } from './types'
import mobileStrings from './mobileStrings'
import webStrings from './webStrings'
import styles from './styles.css'

function Plugin() {
  var style = {
    myinput: { 
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
    }
  };

  const [message, setMessage] = useState('')
  const handleAddStrings = useCallback(
    function () {
      emit<AddStringsHandler>('SOMETHING')
    },[]
  )
  
  type SearchTerm = string;
  type Results = string[][];

  const data = Object.entries(mobileStrings);

  const [searchTerm, setSearchTerm] = useState<SearchTerm>('');;
  const [value, setValue] = useState<string>('')
  const [results, setResults] = useState<Array<any>>([]);
  
  const search = () => {
    setResults([])
    
    data.filter(arr => {
      if( arr[0].toLowerCase().includes(value.toLowerCase()) || arr[1].toLowerCase().includes(value.toLowerCase()) ) {
        setResults(current => [...current, arr]);
      }
      // arr.filter(item => {
      // })
    })
  }

  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    setSearchTerm(value)
    setValue(newValue)
  }
  
  onmessage = (event) => {
    return setMessage(event.data.pluginMessage)
  }
  
  return (
    <Container space="large">
      <VerticalSpace space="large" />

      <SearchTextbox 
        onInput={e => setValue(e.currentTarget.value)}
        value={value}
        style={style.myinput}
      />

      <Button class="hello" onClick={search}>
        Search
      </Button>

      {results?.map(item => (
        <Fragment>
          <VerticalSpace space="large" />
          <div style={style.columns}>
            <p style={style.key}>{item[0]}</p>
            <p style={style.text}>{item[1]}</p>
          </div>
        </Fragment>
      ))}

      {/* {rslts?.map(item => (
        <div>
          <Text style={style.text}>{item}</Text>
        </div>
      ))} */}
      
      <VerticalSpace space="large" />
      
      <Button fullWidth onClick={handleAddStrings}>
        Update strings
      </Button>
      
    </Container>
  )
}

export default render(Plugin)
