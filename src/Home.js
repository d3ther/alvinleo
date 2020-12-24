import React from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import Token from "./Token";
import { Link } from "react-router-dom";

function Home(props) {
  const { name, content, works } = props.data;
  const [is1Hovered, setIs1Hovered] = React.useState(false);
  const [is2Hovered, setIs2Hovered] = React.useState(false);
  const [is3Hovered, setIs3Hovered] = React.useState(false);
  const [is4Hovered, setIs4Hovered] = React.useState(false);
  return (
    <ScrollView style={styles.contentContainer}>
      <View style={styles.textBasedContainer}>
        <Text style={[styles.titleText, styles.nameTextCenterMargin]}>
          {name}
        </Text>
        <Text style={styles.contentText}>{content}</Text>
      </View>
      <View style={styles.containerWorks}>
        <Text style={[styles.titleText, styles.marginTitle]}>
          {works.title}
        </Text>
        <View style={styles.subcontainerWorks}>
          {works.images.map((work, index) => (
            <Link style={styles.boxShadow} key={index} to={work.link}>
              <View
                style={styles.imageWorkContainer}
                onMouseEnter={() => {
                  index === 0
                    ? setIs1Hovered(true)
                    : index === 1
                    ? setIs2Hovered(true)
                    : index === 2
                    ? setIs3Hovered(true)
                    : setIs4Hovered(true);
                }}
                onMouseLeave={() => {
                  index === 0
                    ? setIs1Hovered(false)
                    : index === 1
                    ? setIs2Hovered(false)
                    : index === 2
                    ? setIs3Hovered(false)
                    : setIs4Hovered(true);
                }}>
                <Image
                  resizeMode='cover'
                  source={{ uri: work.photo }}
                  style={[
                    styles.contentPicture,
                    index === 0 &&
                      is1Hovered === true &&
                      styles.hoveredContentPicture,
                    index === 1 &&
                      is2Hovered === true &&
                      styles.hoveredContentPicture,
                    index === 2 &&
                      is3Hovered === true &&
                      styles.hoveredContentPicture,
                    index === 3 &&
                      is4Hovered === true &&
                      styles.hoveredContentPicture,
                  ]}
                />
              </View>
            </Link>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 120,
    zIndex: 1,
  },
  textBasedContainer: {
    width: 960,
    marginHorizontal: "auto",
    paddingVertical: Token.spacing.exxxtralarge,
  },
  containerWorks: {
    width: 960,
    height: 425,
    marginHorizontal: "auto",
  },
  subcontainerWorks: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  imageWorkContainer: {
    width: 192,
    height: 280,
    overflow: "hidden",
    borderRadius: 6,
    boxShadow: "0 3px 8px 0 rgba(0, 0, 0, 0.2)",
  },
  contentPicture: {
    width: 192,
    height: 280,
    transition: "transform .3s ease",
  },
  hoveredContentPicture: {
    transform: "scale(1.12)",
    transition: "transform .3s ease",
  },
  marginTitle: {
    marginTop: Token.spacing.medium,
    marginBottom: Token.spacing.extrasmall,
  },
  nameTextCenterMargin: {
    textAlign: "center",
    marginBottom: Token.spacing.extralarge,
  },
  titleText: {
    ...Token.typography.title,
  },
  subtitleText: {
    ...Token.typography.subtitle,
  },
  contentText: {
    ...Token.typography.content,
  },
  subcontentText: {
    ...Token.typography.subcontent,
  },
});

export default Home;
