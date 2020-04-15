import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Binds an array of actions or 1 action, and dispatches it using useDispatch.
 * @param {[Function]} actions - Array of actions.
 * @param {[Function]} deps - Dependencies for useMemo. useMemo will only
 * recompute if one of the dependencies are updated.
 * @returns {[Function]|Function}
 */
const useActions = (actions, deps = []) => {
  const dispatch = useDispatch();

  return useMemo(
    () => actions.map(action => bindActionCreators(action, dispatch)),
    [dispatch, ...deps]
  );
};

export default useActions;
