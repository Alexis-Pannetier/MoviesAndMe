import React from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";
// import films from "../Helpers/filmsData";
import FilmItem from "../Components/FilmItem";
import { getFilmsFromApiWithSearchedText } from "../API/TMDBApi";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchedText = "";
    this.state = {
      films: [],
    };
  }

  _loadfilms() {
    if (this.searchedText.length > 0) {
      getFilmsFromApiWithSearchedText(this.searchedText).then((data) => {
        this.setState({ films: data.results });
      });
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text;
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Nom"
          onChangeText={(text) => this._searchTextInputChanged(text)}
          style={{
            marginLeft: 5,
            marginRight: 5,
            height: 50,
            borderColor: "#000000",
            borderWidth: 1,
            paddingLeft: 5,
          }}
        />
        <Button title="Rechercher" onPress={() => this._loadfilms()} />
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FilmItem data={item} />}
        />
      </View>
    );
  }
}
