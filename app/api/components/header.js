import 'React' from 'react'

const Header = React.createClass({
  render(){
    var Menu = this.props.menu.forEach(item){
      return (
        <li className={item.selected ? 'menu-selected' : ''}>
          <a href={item.href}>
            {item.title}
          </a>
        </li>
      )
    }
    return (
      <nav className={this.props.className}>
        <ul>{Nav}</ul>
      </nav>
    )
  }
})



export default Header
