import React from 'react'
import {Container,Innercontainer,Images,ImagesMobile,ContentOnImage,Imagecaption,Moreitems,Items,Symbol,ContentBox,Content,Content1,SideContent} from '../Reportpage.styles';


const Report1 = () => {
    return (
        <div>
            
            <Container>
                <Innercontainer>
                    <ImagesMobile src={"https://static.wixstatic.com/media/nsplsh_6af806469de741c19735f40638bb1563~mv2.jpg/v1/fill/w_640,h_448,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_6af806469de741c19735f40638bb1563~mv2.webp"}></ImagesMobile>  
                    <Images src={"https://static.wixstatic.com/media/nsplsh_6af806469de741c19735f40638bb1563~mv2.jpg/v1/fill/w_1895,h_617,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_6af806469de741c19735f40638bb1563~mv2.webp"}></Images>
                    <ContentOnImage>
                        Situation Report - 1 On COVID-19
                    </ContentOnImage>
                    
                </Innercontainer>
                <ContentBox>
                    <Content>
                        <Content1>
                            For The People(FTP), to maintain authenticity produced this report very much based on the data available at World Health Organization(WHO), which is continuously being reported by the national authorities, who have been in regular and direct contact as Member States; where cases have been reported. WHO is also informing other countries about the situation and support as requested. This also contain the data of India, which is made available for public by Ministry of Health and Family Welfare, Government of India(GoI) provided for much reach in the locality where FTP is operating.
                        </Content1>
                        <Content1>
                        WHO highlights about OpenWHO in its Situation Report-57. OpenWHO is an interactive, web-based, knowledge-transfer platform offering free online courses to improve the response to health emergencies. COVID-19 resources are available in the official WHO languages here and in additional national languages here. The OpenWHO team is continuing to work with WHO Country Offices, public health institutes and educational entities who have offered voluntary translation support to help localize the response efforts. Resources in the pipeline include courses in Hindi and Macedonian. For more information, please see Section 02. More information about OpenWHO of the Situation Report.
                        </Content1>
                    </Content>
                    <SideContent>
                        <Moreitems>More Reports</Moreitems>
                        <hr></hr>
                        <a href="/explore/reports/covid-19/report-1" style={{textDecoration: 'none'}}> <Items>Situation Report - 1 On COVID-19</Items></a>
                        <a href="/explore/reports/covid-19/report-2" style={{textDecoration: 'none'}}><Items>Situation Report - 2 On COVID-19</Items></a>
                        <a href="/explore/reports/covid-19/report-3" style={{textDecoration: 'none'}}><Items>Situation Report - 3 On COVID-19</Items></a>
                        <a href="/explore/reports/covid-19/report-4" style={{textDecoration: 'none'}}><Items>Situation Report - 4 On COVID-19</Items></a>
                        <a href="/explore/reports/covid-19/report-5" style={{textDecoration: 'none'}}><Items>Situation Report - 5 On COVID-19</Items></a>
                        <a href="/explore/reports/covid-19/report-6" style={{textDecoration: 'none'}}><Items>Situation Report - 6 On COVID-19</Items></a>
                        <a href="/explore/reports/covid-19/report-7" style={{textDecoration: 'none'}}><Items>Situation Report - 7 On COVID-19</Items></a>
                    </SideContent>
                </ContentBox>
            </Container>
        </div>
    )
}

export default Report1;
