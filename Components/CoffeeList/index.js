import React from "react";
import { List, Content, Spinner } from "native-base";
import { connect } from "react-redux";

// Component
import CoffeeItem from "./CoffeeItem";

const ItemList = ({ items, loading, navigation }) => {
  if (loading) return <Spinner color="rgb(20,90,100)" />;

  const shopList = items.map((item) => (
    <CoffeeItem item={item} key={item.id} navigation={navigation} />
  ));

  return (
    <Content>
      <List>{shopList}</List>
    </Content>
  );
};

const mapStateToProps = ({ items }) => ({
  items,
  // loading: !coffeeshops.length,
});

export default connect(mapStateToProps)(ItemList);
