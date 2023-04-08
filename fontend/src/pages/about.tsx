import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/layouts'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Layout>
        <h1>Noi dung thay hdoi</h1>
        <h3>Noi dung</h3>
        <Link href="/">home</Link>
      </Layout>
    </>
  )
}
