/** @jsx React.DOM */

var DasList = React.createClass({

  getInitialState: function() {
    return { dasItems: [] }
  },

  renderDasItems: function() {
    var dasItems = this.state.dasItems
    if (dasItems.length) {
      return _.map(this.state.dasItems, function(item) {
        return (<li>{ item }</li>)
      })
    } else {
      return "No Items In Das List!"
    }
  },

  render: function() {
    var title = this.props.title
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2 page-header">
          <h2>{ title }</h2>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <ul>
              { this.renderDasItems() }
            </ul>
          </div>
        </div>
      </div>
    )
  }
})

