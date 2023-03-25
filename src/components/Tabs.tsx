import React from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

const Label = {
  "0": "Login",
  "1": "Sign Up"
}

class Tabs extends React.Component<any, any> {
  // static propTypes = {
  //   children: PropTypes.instanceOf(Array).isRequired,
  // };

  constructor(props: any) {
    super(props);
    console.log(this.props);
    this.state = {
      // activeTab: this.props.children[0].props.id,
      activeTab: this.props.showIndex,
    };
  }

  onClickTabItem = (tab: any) => {
    this.setState({ activeTab: tab });
  };

  // componentWillReceiveProps(props) {
  //   this.setState({ activeTab: props.showIndex });
  //   console.log(props.showIndex);
  // }

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child: any) => {
            const { id } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={id}
                label={id}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child: any) => {
            if (child.props.id !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
