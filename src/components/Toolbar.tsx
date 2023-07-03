'use client'
import { FC } from 'react'
import Link from 'next/link'


interface Props {
  pathForm: string
  pathList: string
  entityName: string
  currentEntity: string
}

export const Toolbar: FC<Props> = ({
  pathForm,
  pathList,
  entityName,
  currentEntity,
}) => {

  return (
    <>
      
        <div className="flex flex-row items-start sm:items-center">
        <Link href={pathForm} >
          <button className="my-2 mr-3 font-bold rounded btn btn-outline btn-sm group">
              <svg className="w-3 h-3 mr-1 group-hover:animate-bounce group-hover:fill-white"
                  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                  viewBox="0 0 512 512" xmlSpace="preserve">
                  <g>
                      <path
                          d="M480,224H288V32c0-17.673-14.327-32-32-32s-32,14.327-32,32v192H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h192v192   c0,17.673,14.327,32,32,32s32-14.327,32-32V288h192c17.673,0,32-14.327,32-32S497.673,224,480,224z" />
                  </g>
              </svg>
              <span className="hidden md:inline">
              
                Nuevo
              
              </span>
          </button>
          </Link>
          <h1 className="flex-1 my-2 text-lg text-left">
            <div className="flex-1 text-sm font-bold text-gray-600 breadcrumbs breadflex-1">
              <ul>
                <li>
                  <Link href={pathList}>{entityName}</Link>
                </li>
                <li>
                  <a>{currentEntity}</a>
                </li>
              </ul>
            </div>
          </h1>       
        </div>
      
      
    </>
  )
}
