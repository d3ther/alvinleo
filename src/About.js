import React from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import Token from "./Token";
import { NavLink } from "react-router-dom";

function About(props) {
  const { aboutEdu, workExp, skillExpertise, contact } = props.data;
  return (
    <ScrollView style={styles.contentContainer}>
      <View style={styles.textBasedContainer}>
        <View style={styles.contentAboutContainer}>
          <Text style={[styles.titleText, styles.marginTitle]}>
            {aboutEdu.title}
          </Text>
          <Text style={styles.contentText}>{aboutEdu.content}</Text>
          <View style={styles.iconEduContainer}>
            <Image
              resizeMode='contain'
              source={{ uri: aboutEdu.icon }}
              style={styles.icon}
            />
            <View>
              <Text style={styles.subtitleText}>{aboutEdu.university}</Text>
              <Text style={styles.contentText}>{aboutEdu.year}</Text>
            </View>
          </View>
        </View>

        <View style={styles.contentAboutContainer}>
          <Text style={[styles.titleText, styles.marginTitle]}>
            {workExp.title}
          </Text>
          <View style={styles.expMainContainer}>
            <View style={{ flexDirection: "column" }}>
              {workExp.experiences.map(({ top, name, content }, index) => (
                <View style={styles.expContentContainer} key={index}>
                  <View style={styles.expStep}></View>
                  <View
                    style={[
                      styles.expContainer,
                      workExp.experiences.length - 1 !== index &&
                        styles.workExpMargin,
                    ]}>
                    <Text style={styles.informationText}>{top}</Text>
                    <Text style={styles.subtitleText}>{name}</Text>
                    <Text style={styles.contentText}>{content}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.contentAboutContainer}>
          <Text style={[styles.titleText, styles.marginTitle]}>
            {skillExpertise.title}
          </Text>
          {skillExpertise.abilities.map(({ subtitle, content }, index) => (
            <View
              style={[
                styles.expertiseContainer,
                skillExpertise.abilities.length - 1 === index &&
                  styles.lastMarginExpertise,
              ]}>
              <Text style={[styles.subtitleText, styles.widthSkill]}>
                {subtitle}
              </Text>
              <Text
                style={[
                  styles.contentText,
                  styles.widthSkill,
                  styles.rightSkillContent,
                ]}>
                {content}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.contentAboutContainer}>
          <Text style={[styles.titleText, styles.marginTitle]}>
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 120,
    zIndex: 1,
  },
  navLinkNotUnderline: {
    textDecoration: "none",
  },
  textBasedContainer: {
    width: 960,
    marginHorizontal: "auto",
    paddingVertical: Token.spacing.exxxtralarge,
  },
  mePicContainer: {
    width: 360,
    height: 420,
    marginHorizontal: "auto",
    marginBottom: Token.spacing.medium,
  },
  widthSkill: {
    width: "50%",
  },
  rightSkillContent: {
    textAlign: "right",
  },
  expertiseContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: Token.spacing.medium,
    borderBottomColor: Token.color.subcontent,
    borderBottomWidth: 2,
    borderBottomStyle: "dashed",
  },
  lastMarginExpertise: {
    marginTop: Token.spacing.medium,
  },
  contentAboutContainer: {
    marginBottom: Token.spacing.extralarge,
  },
  iconEduContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Token.spacing.extrasmall,
  },
  iconContactContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  contentPicture: {
    width: 240,
    height: 360,
    transition: "transform .3s ease",
  },
  expMainContainer: {
    position: "relative",
    flexDirection: "row",
  },
  expContentContainer: {
    flexDirection: "row",
  },
  expStep: {
    width: 16,
    height: 16,
    borderRadius: 16,
    backgroundColor: Token.color.blue,
    marginRight: Token.spacing.medium,
  },
  icon: {
    width: 48,
    height: 48,
    marginRight: Token.spacing.small,
  },
  iconContact: {
    width: 24,
    height: 24,
    marginRight: Token.spacing.small,
  },
  expContainer: {
    width: 920,
  },
  workExpMargin: {
    paddingBottom: Token.spacing.large,
    marginLeft: -Token.spacing.large,
    borderLeftColor: Token.color.blue,
    borderLeftWidth: 2,
    borderLeftStyle: "dashed",
    paddingLeft: Token.spacing.large,
  },

  listStepContainer: {
    flexDirection: "row",
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
  informationText: {
    ...Token.typography.information,
  },
});

export default About;
