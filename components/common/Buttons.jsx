import Link from 'next/link'
import React from 'react'
import Style from "@/styles/buttons.module.scss"

export default function Button({data}) {
  return (
    <Link href={data.linkUrl || "#"} className={`${data.buttonStyle[0]=='btn btn-blue' ? `${Style.btn} ${Style.btn_blue}` : "btn"}`}>
            {data.text}
    </Link>
  )
}