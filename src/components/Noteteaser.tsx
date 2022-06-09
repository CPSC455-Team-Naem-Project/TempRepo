import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core'
import { faImage, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@mui/material'


export interface Note {
    title: string
    iconType: IconDefinition
    course: any
  }

export default function Noteteaser({ iconType, course, title } :Note){


    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>

        <FontAwesomeIcon icon= {iconType as IconProp}  size="2x"/>
        <p>{title}</p>
        <Button className={course.className} variant="outlined" size = "small" sx={ { borderRadius: 8, color:"black" }}>{course.name}</Button> 
                
         </div>
    )
    
}