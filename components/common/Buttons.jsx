import Link from 'next/link'
import React from 'react'
import Style from "@/styles/buttons.module.scss"

export default function Button({data}) {
    // console.log(data)
    const btnClass = {
        "btn-blue": "btn btn-blue",
    }
  return (
    <Link href={data.linkUrl || "#"} className={`${btnClass?.[data.buttonStyle[0]] }`}>
            {data.text}
    </Link>
  )
}