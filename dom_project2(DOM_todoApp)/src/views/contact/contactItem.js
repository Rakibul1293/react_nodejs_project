import { create } from '../../helper'

// export function ContactItem() {
//     let li = create('li', { class: 'list-group-item d-flex' })

//     let avatar = create({ class: 'avatar' })

//     let groupDiv = create()

//     let p1 = create('p')
//     let p2 = create('p')
    

//     groupDiv.append(p1)
//     groupDiv.append(p2)

//     li.append(avatar)
//     li.append(groupDiv)

//     return li
// }



export default function ContactItem(props) {
    let li = create('li', { class: 'list-group-item d-flex' })

    let avatar = create({ class: 'avatar' })
    avatar.innerHTML = props.avatar

    let groupDiv = create()

    let p1 = create('p')
    p1.innerHTML = props.name
    let p2 = create('p')
    p2.innerHTML = props.phone

    groupDiv.append(p1)
    groupDiv.append(p2)

    li.append(avatar)
    li.append(groupDiv)

    li.onclick = function(e) {
        this.remove()
    }

    return li
}