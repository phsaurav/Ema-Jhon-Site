import { useEffect, useState } from 'react';
import initializeAuthentication from '../services/firebase/firebase.init';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	GithubAuthProvider,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import { useHistory } from 'react-router';

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const auth = getAuth();
	const history = useHistory();

	const signInUsingGoogle = () => {
		setIsLoading(true);
		const googleProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleProvider);
	};

	const signInUsingGithub = () => {
		setIsLoading(true);
		const githubProvider = new GithubAuthProvider();
		signInWithPopup(auth, githubProvider)
			.then((res) => {
				setUser(res.user);
				console.log(user);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				setUser({});
				history.push('/shop');
			})
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		user,
		error,
		isLoading,
		setUser,
		setError,
		setIsLoading,
		logOut,
		signInUsingGoogle,
		signInUsingGithub,
	};
};

export default useFirebase;
