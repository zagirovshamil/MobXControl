// components/AutocompleteControl/AutocompleteViewModel.ts
import { runInAction, makeAutoObservable } from 'mobx';
import { CountryInfo, getCountryByName } from '../../api';


export class AutocompleteViewModel {
    query: string = '';
    suggestions: CountryInfo[] = [];
    isLoading: boolean = false;
    error: string | null = null;
    maxSuggestions: number;
    showSuggestions: boolean = false;

    constructor(maxSuggestions: number = 5) {
        this.maxSuggestions = maxSuggestions;
        makeAutoObservable(this)
    }

    setQuery = (newQuery: string) => {
        this.query = newQuery;
        if (newQuery.length > 0) {
            this.fetchSuggestions(newQuery);
        } else {
            this.suggestions = [];
        }
    };

    fetchSuggestions = async (query: string) => {
        this.isLoading = true;
        this.error = null;

        try {
            const data = await getCountryByName(query);
            runInAction(() => {
                this.suggestions = data.slice(0, this.maxSuggestions);
                this.isLoading = false;
                this.showSuggestions = true;
            });
        } catch (err) {
            runInAction(() => {
                this.error = 'Ошибка при загрузке подсказок';
                this.isLoading = false;
                this.showSuggestions = false;
            });
        }
    };

    selectSuggestion = (suggestion: CountryInfo) => {
        this.query = suggestion.name;
        this.suggestions = [];
        this.showSuggestions = false;
    };

    toggleSuggestions = (show: boolean) => {
        this.showSuggestions = show && this.query.length > 0 && this.suggestions.length > 0;
    };
}