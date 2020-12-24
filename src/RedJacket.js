import React from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import Token from "./Token";

function Brief(props) {
  const { title, briefPicture, briefExplanations } = props;
  return (
    <View>
      <View style={styles.redJacketMainPictureContainer}>
        {briefPicture.map((picture, index) => (
          <View style={styles.mainPictureContainer}>
            <Image
              resizeMode='contain'
              key={index}
              source={{ uri: picture }}
              style={styles.headerPicture}
            />
          </View>
        ))}
      </View>
      <Text style={[styles.titleText, styles.marginTitle]}>{title}</Text>
      {briefExplanations.map((brief, index) => (
        <Text
          key={index}
          style={[
            styles.contentText,
            briefExplanations.length - 1 !== index && styles.contentMargin,
          ]}>
          {brief}
        </Text>
      ))}
    </View>
  );
}

function Process(props) {
  const { title, flow } = props;
  return (
    <View>
      <Text style={[styles.subtitleText, styles.marginTitle]}>{title}</Text>
      <Text style={styles.contentText}>{flow}</Text>
    </View>
  );
}

function Steps(props) {
  const { steps, preview } = props;
  return (
    <View>
      {steps.map(({ picture, title, content }, index) => (
        <View style={styles.stepContainer}>
          {picture && (
            <Image
              resizeMode='contain'
              source={{ uri: picture }}
              style={
                preview === true ? styles.headerPicture : styles.contentPicture
              }
            />
          )}
          <Text style={[styles.titleText, styles.stepTextMargin]}>{title}</Text>
          <Text style={[styles.contentText, styles.stepTextMargin]}>
            {content}
          </Text>
        </View>
      ))}
    </View>
  );
}

function FinalDesign(props) {
  const { finalDesign, preview } = props;
  return (
    <View>
      <Text style={[styles.titleText, styles.stepTextMargin]}>
        {finalDesign.title}
      </Text>
      <View style={styles.redJacketMainPictureContainer}>
        {finalDesign.pictures.map((picture, e) => (
          <View style={styles.mainPictureContainer}>
            <Image
              resizeMode='contain'
              source={{ uri: picture }}
              style={
                preview === true ? styles.headerPicture : styles.contentPicture
              }
            />
          </View>
        ))}
      </View>
    </View>
  );
}

function LandingPage(props) {
  const {
    briefPicture,
    title,
    briefExplanations,
    process,
    steps,
    finalDesign,
  } = props.data;
  return (
    <ScrollView style={styles.contentContainer}>
      <View style={styles.textBasedContainer}>
        <Brief
          title={title}
          briefPicture={briefPicture}
          briefExplanations={briefExplanations}
        />
        <Process title={process.title} flow={process.flow} />
        <Steps steps={steps} preview={true} />
        <FinalDesign finalDesign={finalDesign} preview={true} />
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
  headerPicture: {
    height: 560,
  },
  contentPicture: {
    height: 330,
  },
  contentMargin: {
    marginBottom: Token.spacing.extrasmall,
  },
  stepTextMargin: {
    marginTop: Token.spacing.small,
  },
  listMargin: {
    marginBottom: Token.spacing.exxtrasmall,
  },
  listStepMargin: {
    marginLeft: Token.spacing.small,
  },
  stackContainer: {
    flexDirection: "column",
  },
  listStepContainer: {
    flexDirection: "row",
  },
  stackText: {
    display: "block",
  },
  stepContainer: {
    marginVertical: Token.spacing.medium,
  },
  marginTitle: {
    marginTop: Token.spacing.medium,
    marginBottom: Token.spacing.extrasmall,
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
  mainPictureContainer: {
    width: 200,
  },
  redJacketMainPictureContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default LandingPage;
