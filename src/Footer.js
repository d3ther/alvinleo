import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import logo from "./logo.svg";
import Token from "./Token";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";

function Footer(props) {
  const { aboutEdu, contact } = props.aboutData;
  const { title } = props.data;

  return (
    <View style={styles.footerMainContainer}>
      <View style={styles.textBasedContainer}>
        <View style={styles.footerContent}>
          <Text
            style={[styles.titleText, styles.marginTitle, styles.footerText]}>
            {contact.title}
          </Text>
          <View style={styles.iconContactContainer}>
            {contact.content.map(({ icon, link }, index) => (
              <a
                key={index}
                target='_blank'
                rel='noopener noreferrer'
                href={link}>
                <Image
                  resizeMode='contain'
                  source={{ uri: icon }}
                  style={styles.iconContact}
                />
              </a>
            ))}
          </View>
        </View>
        <View style={styles.footerContent}>
          <Text
            style={[styles.titleText, styles.marginTitle, styles.footerText]}>
            {title}
          </Text>
          <Text style={[styles.contentText, styles.footerText]}>
            {aboutEdu.content}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerMainContainer: {
    backgroundColor: Token.color.subcontent,
  },
  contentContainer: {
    marginTop: 120,
    zIndex: 1,
  },
  textBasedContainer: {
    width: 960,
    flexDirection: "row",
    alignItems: "flex-start",
    marginHorizontal: "auto",
    paddingVertical: Token.spacing.exxxtralarge,
  },
  iconContactContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  footerContent: {
    width: 300,
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
  iconContact: {
    width: 24,
    height: 24,
    marginRight: Token.spacing.small,
  },
  stackText: {
    display: "block",
  },
  stepContainer: {
    marginVertical: Token.spacing.medium,
  },
  marginTitle: {
    marginTop: Token.spacing.medium,
    marginBottom: Token.spacing.small,
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
  footerText: {
    color: Token.color.white,
  },
});

export default Footer;
