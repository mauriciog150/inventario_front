import { FC } from 'react'

interface Props {
    columnas: string[]
}

const Head:FC <Props> = ({columnas}) => {
 return (
   <>
          <thead>
            <tr>
              {columnas.map((columna)  =>(<th key={columna}>{columna}</th>))}
            </tr>
          </thead>   
   </>
 )
}

export default Head