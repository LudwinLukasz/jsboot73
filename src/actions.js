import uuid from 'uuid';

export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';

// {
// 	type: REMOVE_COMMENT,
// 	id: 10 // przykładowy id komentarza do usunięcia
// }

// {
// 	type: EDIT_COMMENT,
// 	id: 20, // tutaj przykładowy id komentarza do edycji
// 	text: 'wyedytowany tekst komentarza'
// }

// {
// 	type: THUMB_UP_COMMENT,
// 	id: 30, 
//  //   votes: votes++ // zwieksza ilosc polubien
// }

// {
// 	type: THUMB_DOWN_COMMENT,
// 	id: 40,
// //    votes: votes-- // zmniejsza ilosc polubien
// }

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text: text,
		id: uuid.v4(),
		votes: 0
	}
}

function editComment(id, text) {
	return {
		type: EDIT_COMMENT,
		text: text,
		id: id
	}
}

function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id: id
	}
}

function thumbUpComment(id) {
	return {
		type: THUMB_UP_COMMENT,
		id: id,
//        votes: votes++
	}
}

function thumbDownComment(id) {
	return {
		type: THUMB_DOWN_COMMENT,
		id: id,
//        votes: votes--
	}
}
export {addComment, removeComment, thumbDownComment, thumbUpComment, editComment};
// export removeComment;
// export thumbDownComment;
// export thumbUpComment;
// export editComment;