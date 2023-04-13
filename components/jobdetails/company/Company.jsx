import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'


const Company = ({companyLogo, jobTitle, companyName, location}) => {
  let jobLogo;
  companyLogo
    ? (jobLogo = companyLogo)
    : (jobLogo =
        "https://avatars.githubusercontent.com/u/51377066?s=400&u=11c8e309783a7f616031d78d47f6a62e3f695dcb&v=4");
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image 
        source={{
          uri: jobLogo
        }}
        style={styles.logoImage}/>
      </View>
    </View>
  )
}

export default Company