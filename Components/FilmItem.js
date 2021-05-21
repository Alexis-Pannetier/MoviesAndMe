import React from "react";
import { Image, Text, View } from "react-native";

export default class Search extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <View
        style={{
          flexDirection: "row",
          margin: 8,
        }}
      >
        <Image
          style={{ height: 180, width: 120 }}
          source={{
            uri: "https://image.tmdb.org/t/p/original/" + data?.poster_path,
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
      </View>
    );
  }
}
