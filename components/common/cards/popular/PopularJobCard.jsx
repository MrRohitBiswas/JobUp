import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  let jobLogo
  (item.employer_logo)?jobLogo = item.employer_logo:jobLogo="https://avatars.githubusercontent.com/u/51377066?s=400&u=11c8e309783a7f616031d78d47f6a62e3f695dcb&v=4"
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item) }>
        <Image
          source={{ uri: jobLogo }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob,item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>

      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
