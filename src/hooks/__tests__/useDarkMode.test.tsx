import { renderHook, act } from '@testing-library/react';
import useDarkMode from '../useDarkMode';

describe('useDarkMode hook', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('initializes with default false if no localStorage', () => {
    const { result } = renderHook(() => useDarkMode());
    expect(result.current.isDark).toBe(false); // ✅ object access
  });

  it('toggles dark mode', () => {
    const { result } = renderHook(() => useDarkMode());

    act(() => {
      result.current.toggleDarkMode();
    });

    expect(result.current.isDark).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');

    act(() => {
      result.current.toggleDarkMode();
    });

    expect(result.current.isDark).toBe(false);
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
