import Link from 'next/link'
import React from 'react'
import Style from "@/styles/buttons.module.scss"

export default function Button({data}) {
    // console.log(data)
    const btnClass = {
        "btn-blue": "btn btn-blue",
    }
  return (
    <Link href={data?.link_url || "#"} className={`${btnClass?.[data?.button_style] }`}>
            {data?.text}
    </Link> 
  )
}