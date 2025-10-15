import React, {useEffect, useState} from 'react'
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import SearchBar from "../../componets/Search/SearchBar";
import SearchInput from "../../componets/Search/SearchInput";
import searchData from "../../data/search";
import * as NavigationService from "../../NavigationService";

const Search = () => {

    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState(searchData);

    const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));
    const {width, height} = windowDimensions;
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    useEffect(() => {
        const handler = ({window}) => setWindowDimensions(window);
        const sub = Dimensions.addEventListener ? Dimensions.addEventListener('change', handler) : null;
        if (!sub) Dimensions.addEventListener('change', handler);

        return () => {
            try {
                if (sub && sub.remove) sub.remove();
                else Dimensions.removeEventListener('change', handler);
            } catch (e) {
            }
        };
    }, []);

    useEffect(() => {
        if (search !== "") {
            let result = searchData.filter((item, index) => {
                return item.name.toLowerCase().includes(search.toLowerCase());
            })

            setFiltered(result);
        } else {
            setFiltered(searchData);
        }
    }, [search]);

    return (
        <View style={styles.container}>
            <SearchBar/>
            <SearchInput setSearch={setSearch} search={search}/>
            <View style={styles.search_container}>
                {(search !== "" && filtered.length > 0) &&
                    <Text style={styles.result_text}>"{search}" için {filtered.length} sonuç bulundu</Text>}
            </View>

            <FlatList showsVerticalScrollIndicator={false} columnWrapperStyle={styles.flatlist_column_wrapper} ListEmptyComponent={(
                <Text style={styles.flatlist_empty}>Herhangi bir sonuç bulunamadı</Text>
            )} data={filtered} numColumns={3} renderItem={({item, index}) => (
                <TouchableOpacity onPress={() => {
                    NavigationService.navigate("MovieDetail", item);
                }}>
                    <Image style={styles.image_cover(position, width, height)} source={{uri: item.image}}/>
                </TouchableOpacity>
            )}/>
        </View>
    )
}

export default Search
