import React from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import Token from "./Token";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";

function Brief(props) {
  const { title, briefPicture, briefExplanations } = props;
  return (
    <View>
      <Image
        resizeMode='contain'
        source={{ uri: briefPicture }}
        style={styles.headerPicture}
      />
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

function TechStack(props) {
  const { title, lists } = props;
  return (
    <View>
      <Text style={[styles.subtitleText, styles.marginTitle]}>{title}</Text>

      <View style={styles.stackContainer}>
        {lists.map((list, index) => (
          <Text
            style={[
              styles.stackText,
              styles.contentText,
              lists.length - 1 !== index && styles.listMargin,
            ]}
            key={index}>
            {list}
          </Text>
        ))}
      </View>
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

function LazadaAnniversary(props) {
  const {
    briefPicture,
    title,
    briefExplanations,
    techStack,
    process,
  } = props.data;
  return (
    <ScrollView style={styles.contentContainer}>
      <View style={styles.textBasedContainer}>
        <Brief
          title={title}
          briefPicture={briefPicture}
          briefExplanations={briefExplanations}
        />
        <TechStack title={techStack.title} lists={techStack.lists} />
        <Process title={process.title} flow={process.flow} />
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
  contentMargin: {
    marginBottom: Token.spacing.extrasmall,
  },
  listMargin: {
    marginBottom: Token.spacing.exxtrasmall,
  },
  stackContainer: {
    flexDirection: "column",
  },
  stackText: {
    display: "block",
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
});

export default LazadaAnniversary;
