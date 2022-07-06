import { put, call, takeEvery, delay } from 'redux-saga/effects';
import { retrieveCatsSuccess } from './catSlice';

function* fetchCats() {
    const res = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));
    const cats = yield res.json();
    yield delay(1000)
    yield put(retrieveCatsSuccess(cats.slice(0, 30)));
}

function* catSaga() {
    yield takeEvery('cat/retrieveCats', fetchCats)
}

export default catSaga;