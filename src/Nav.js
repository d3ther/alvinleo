import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import Token from "./Token";
import Map from "./assets/image/map.png";
import { NavLink } from "react-router-dom";
import "./App.css";

function Nav(props) {
  const { name, title, photo, position, links } = props.data;
  return (
    <View style={styles.mainContainerTop}>
      <View style={styles.topContent}>
        <View style={styles.picMeContainer}>
          <View>
            <Image
              resizeMode='cover'
              source={{ uri: photo }}
              style={styles.profilePicture}
            />
          </View>
          <View style={styles.meContainer}>
            <Text style={[styles.titleText, styles.marginTitleTop]}>
              {name}
            </Text>
            <Text style={[styles.subcontentText, styles.marginSubtitleTop]}>
              {title}
            </Text>
            <View style={styles.position}>
              <Image source={{ uri: Map }} style={styles.mapPicture} />
              <Text style={[styles.subcontentText, styles.marginLocation]}>
                {position}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.navContainer}>
          {links.map((link, index) => {
            return (
              <NavLink
                key={index}
                to={link.link}
                style={{ textDecoration: "none" }}>
                <Text
                  style={[
                    styles.navText,
                    links.length - 1 !== index && styles.navMargin,
                  ]}>
                  {link.name}
                </Text>
              </NavLink>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navText: {
    ...Token.typography.link,
  },
  profilePicture: {
    height: 86,
    width: 86,
    borderRadius: 86,
    overflow: "hidden",
    transition: "transform .3s ease",
  },
  hoveredImage: {
    transition: "transform .3s ease",
    transform: "scale(1.5)",
  },
  mapPicture: {
    height: 28,
    width: 16,
    resizeMode: "cover",
  },
  testText: {
    ...Token.typography.content,
    marginRight: Token.spacing.small,
  },
  mainContainer: {},
  topContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 960,
    marginHorizontal: "auto",
    height: 120,
  },
  mainContainerTop: {
    boxShadow: "0 1px 1px 1px",
    position: "fixed",
    width: "100%",
    backgroundColor: "white",
    zIndex: 10,
  },
  picMeContainer: {
    flexDirection: "row",
  },
  meContainer: {
    marginLeft: Token.spacing.medium,
  },
  navContainer: {
    flexDirection: "row",
  },
  navMargin: {
    marginRight: Token.spacing.extrasmall,
  },
  position: {
    flexDirection: "row",
  },
  marginTitleTop: {
    marginBottom: Token.spacing.extrasmall,
  },
  marginSubtitleTop: {
    marginBottom: Token.spacing.extrasmall,
  },
  marginLocation: {
    marginLeft: Token.spacing.extrasmall,
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

export default Nav;
