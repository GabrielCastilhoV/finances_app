import React from "react";
import { FlatList } from "react-native";
import { Button } from "../../components/Forms/Button";

import { categories } from "../../utils/categories";

import * as S from "./styles";

type CategoryProps = {
  key: string;
  name: string;
};

type CategorySelectProps = {
  category: CategoryProps;
  setCategory: (name: CategoryProps) => void;
  closeSelectCategory: () => void;
};

export const CategorySelect = ({
  category,
  setCategory,
  closeSelectCategory,
}: CategorySelectProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Category</S.Title>
      </S.Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <S.Category
            onPress={() => setCategory(item)}
            isActive={category.key === item.key}
          >
            <S.Icon name={item.icon} />
            <S.Name>{item.name}</S.Name>
          </S.Category>
        )}
        ItemSeparatorComponent={() => <S.Separator />}
      />

      <S.Footer>
        <Button title="Select Category" onPress={closeSelectCategory} />
      </S.Footer>
    </S.Wrapper>
  );
};
