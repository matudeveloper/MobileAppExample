import React, {useState} from 'react';
import { View, Text,FlatList } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import Header from "../../../components/Header"
import { styles } from './styles';
import { categories } from '../../../../data/categories';
import CategoryBox from "../../../components/CategoryBox"
import ProductHomeItem from '../../../components/ProductHomeItem';
import { products } from '../../../../data/products';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState()
    const [keyword, setKeyword] = useState()
    const [selectedProducts, setSelectedProducts] = useState(products)

    useEffect = (() => {
        if(selectedCategory){
            const updateSelectedProducts = products.filter((product) =>
            product?.category === selectedCategory)
            setSelectedProducts(updateSelectedProducts)
        }else if(keyword && selectedCategory){
            const updateSelectedProducts = products.filter((product) =>
            product?.category === selectedCategory && product?.title?.toLowerCase().
            includes(keyword.toLowerCase()))
            setSelectedProducts(updateSelectedProducts)
        } 
        else if(keyword && !selectedCategory){
            const updateSelectedProducts = products.filter((product) => 
            product?.title?.toLowerCase().includes(keyword?.toLowerCase()))
            setSelectedProducts(updateSelectedProducts)
        }
        else if(!keyword && !selectedCategory){
            setSelectedProducts(products)
        }
    }, [setSelectedProducts, keyword])

    const renderCategoryItem = ({item}) => {
        console.log('item =>', item)
        return (
            
            <CategoryBox onPress={() => setSelectedCategory(item?.id)} 
            isSelected={item.id === selectedCategory}
            title={item?.title} image={item?.image} />
            
        )
    }

    const renderProductItem = ({item}) => {
        console.log( 'item =>', item )
        return (
            <ProductHomeItem { ...item } />
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.container} >
                <Header showSearch={true} onSearchKeyword={setKeyword} keyword={keyword}
                 title="Find All You Need" />
                <FlatList showHorizontalScrollIndicator={false} 
                style={styles.list} horizontal data={categories} renderItem={renderCategoryItem} 
                keyExtractor={(item, index) => String(index)} />
                <FlatList numColumns={2} data={selectedProducts} renderItem={renderProductItem} 
                keyExtractor={(item) => String(item.id)} ListFooterComponent={<View style={{height: 250}}
            />} />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Home)