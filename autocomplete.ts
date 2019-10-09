import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemEventData } from 'tns-core-modules/ui/list-view/list-view';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { RadAutoCompleteTextViewComponent } from "nativescript-ui-autocomplete/angular";
import { AutoCompleteSuggestMode, AutoCompleteCompletionMode, AutoCompleteDisplayMode, TokenModel } from 'nativescript-ui-autocomplete';


@Component({
    selector: 'ns-task-answer',
    templateUrl: './task-answer.component.html',
    styleUrls: ['./task-answer.component.scss'],
    moduleId: module.id
})
export class TaskAnswerComponent implements OnInit {
  

    private _items: ObservableArray<TokenModel>;
    private countries = ["Australia", "Albania", "Austria", "Argentina", "Maldives", "Bulgaria", "Belgium", "Cyprus", "Italy", "Japan",
        "Denmark", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland",
        "Latvia", "Luxembourg", "Macedonia", "Moldova", "Monaco", "Netherlands", "Norway",
        "Poland", "Romania", "Russia", "Sweden", "Slovenia", "Slovakia", "Turkey", "Ukraine",
        "Vatican City", "Chad", "China", "Chile"];


    constructor(
    ) {
        this.initDataItems();
    }

    @ViewChild("autocomplete", { static: false }) autocomplete: RadAutoCompleteTextViewComponent;

    get dataItems(): ObservableArray<TokenModel> {
        return this._items;
    }

    private initDataItems() {
        this._items = new ObservableArray<TokenModel>();

        for (let i = 0; i < this.countries.length; i++) {
            this._items.push(new TokenModel(this.countries[i], undefined));
        }
    }

    public onDidAutoComplete(args) {
        console.log("DidAutoComplete with text: " + args.text);
    }

    public onSuggestSelected(args) {
        console.log(this.autocomplete.autoCompleteTextView.text);
        this.autocomplete.autoCompleteTextView.suggestMode = AutoCompleteSuggestMode.Suggest;
        this.autocomplete.autoCompleteTextView.resetAutoComplete();
    }

    public onAppendSelected(args) {
        this.autocomplete.autoCompleteTextView.suggestMode = AutoCompleteSuggestMode.Append;
        this.autocomplete.autoCompleteTextView.completionMode = AutoCompleteCompletionMode.StartsWith;
        this.autocomplete.autoCompleteTextView.resetAutoComplete();
    }

    public onSuggestAppendSelected(args) {
        this.autocomplete.autoCompleteTextView.suggestMode = AutoCompleteSuggestMode.SuggestAppend;
        this.autocomplete.autoCompleteTextView.completionMode = AutoCompleteCompletionMode.StartsWith;
        this.autocomplete.autoCompleteTextView.resetAutoComplete();
    }

    public onStartsWithSelected(args) {
        this.autocomplete.autoCompleteTextView.completionMode = AutoCompleteCompletionMode.StartsWith;
        this.autocomplete.autoCompleteTextView.resetAutoComplete();
    }

    public onContainsSelected(args) {
        this.autocomplete.autoCompleteTextView.completionMode = AutoCompleteCompletionMode.Contains;
        this.autocomplete.autoCompleteTextView.suggestMode = AutoCompleteSuggestMode.Suggest;
        this.autocomplete.autoCompleteTextView.resetAutoComplete();
    }

    public onPlainSelected(args) {
        this.autocomplete.autoCompleteTextView.displayMode = AutoCompleteDisplayMode.Plain;
        this.autocomplete.autoCompleteTextView.resetAutoComplete();
    }

    public onTokensSelected(args) {
        this.autocomplete.autoCompleteTextView.displayMode = AutoCompleteDisplayMode.Tokens;
        this.autocomplete.autoCompleteTextView.resetAutoComplete();
    }

    ngOnInit() {
        
    }

}
