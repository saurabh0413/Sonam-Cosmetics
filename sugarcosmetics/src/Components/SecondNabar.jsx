import { ReactNode } from 'react';
import {
  
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  color,
} from '@chakra-ui/react';



export default function SecondNabar() {
  

  return (
    <>
      
          
      <Tabs style={{backgroundColor:"black", color:"white"}}>
  <TabList>
    <Tab>Makeup</Tab>
    <Tab>Brushes</Tab>
    <Tab>Skincare</Tab>
    <Tab>Gifting</Tab>
    <Tab>Blog</Tab>
    <Tab>Offers</Tab>
    <Tab>Stores</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
          
      
        
     
    </>
  );
}