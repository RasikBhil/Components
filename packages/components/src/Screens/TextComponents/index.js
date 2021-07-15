import React from 'react';
import {SafeAreaView} from 'react-native';
import {Box, PlainText, SubHeadingText, HeadingText, Header} from 'components/src/components';
import {useTheme} from "@react-navigation/native";


const TextComponents = ({navigation}) => {
    const theme = useTheme();
    return (
        <Box as={SafeAreaView}>
            <Header navigation={navigation}/>
            <Box p={20} mt={20}>
            <HeadingText color={theme.colors.text}>
                HeadingText
            </HeadingText>
            <SubHeadingText color={theme.colors.text}>
                SubHeadingText
            </SubHeadingText>
            <PlainText color={theme.colors.text}>
                PlainText
            </PlainText>
            </Box>
        </Box>
    )
}
export default TextComponents;
