import React from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

class Tabs extends React.Component<any, any> {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props: any) {
    super(props);
    console.log(this.props);
    this.state = {
      // activeTab: this.props.children[0].props.label,
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
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child: any) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
