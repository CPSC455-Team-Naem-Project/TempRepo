import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core'
import { faImage, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@mui/material'


interface Props {
    iconType: IconDefinition
    title: String
    categories : String[]
  }

export default function Noteteaser({ iconType, title, categories } :Props){

    let cats = categories.map(categoryName =>  <Button variant="outlined" size = "small">{categoryName}</Button>    )

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>

        <FontAwesomeIcon icon= {iconType as IconProp}  size="2x"/>
        <p>{title}</p>
        {cats}
                
         </div>
    )
    
}