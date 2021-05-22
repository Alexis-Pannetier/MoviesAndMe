import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getImageFromApi } from "../API/TMDBApi";

export default class Search extends React.Component {
  _displayFavoriteImage() {
    if (this.props.isFilmFavorite) {
      return (
        <Image
          style={styles.favorite_image}
          source={require("../assets/favorite.png")}
        />
      );
    }
  }

  render() {
    const { data, displayDetailForFilm } = this.props;
    return (
      <TouchableOpacity
        onPress={() => displayDetailForFilm(data.id)}
        style={{
          flexDirection: "row",
          margin: 8,
        }}
      >
        <Image
          style={{ height: 180, width: 120 }}
          source={{
            uri: getImageFromApi(data?.poster_path),
          }}
        />
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "orange ",
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 1, margin: 4 }}>
              <Text>Titre : {data.title}</Text>
              {this._displayFavoriteImage()}
            </View>
            <View style={{ flex: 1, margin: 4 }}>
              <Text>Vote : {data.vote_average}</Text>
            </View>
          </View>
          <Text
            numberOfLines={6}
            style={{
              flex: 5,
              flexWrap: "wrap",
              margin: 4,
            }}
          >
            Description : {data.overview}
          </Text>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                flex: 1,
                flexWrap: "wrap",
                margin: 4,
                textAlign: "right",
              }}
            >
              Sortie le : {data.release_date}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  favorite_image: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
});
