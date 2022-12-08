import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from '@emotion/styled';
import SideBar from '../components/ContentComplete';



const PageContent = styled.div`
  display: flex;
`;



export default function Home() {
  return (
    <PageContent>
      <SideBar/>
    </PageContent>
  )
}
