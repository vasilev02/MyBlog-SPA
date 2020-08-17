export function create(data) {
    return firebase.firestore().collection('posts').add(data)
}
export function getAll() {
    return firebase.firestore().collection('posts').get()
}
export function get(id) {
    return firebase.firestore().collection('posts').doc(id).get()
}
export function close(id) {
    return firebase.firestore().collection('posts').doc(id).delete()
}
export function update(id, data) {
    return firebase.firestore().collection('posts').doc(id).update(data)
}