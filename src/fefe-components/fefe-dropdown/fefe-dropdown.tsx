import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'fefe-dropdown',
    styleUrl: 'fefe-dropdown.scss'
})
export class FeFeDropdown {

    // Indicate that name should be a public property on the component
    @Prop() values: string;

    componentWillLoad() {
        console.log(JSON.parse(this.values).collection);
    }

    render() {
        if (this.values !== undefined) {
            return (
                <select class="form-control">
                    {JSON.parse(this.values).collection.map((value) =>
                        <option>{value}</option>
                    )}
                </select>)
        } else {
            return (
                <div>
                    <p>Loading...</p>
                </div>
            );
        }
    }
}