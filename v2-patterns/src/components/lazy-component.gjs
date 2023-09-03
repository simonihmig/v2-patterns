import { trackedFunction } from 'ember-resources/util/function';
import Component from '@glimmer/component';

export default class extends Component {
  threeScene = trackedFunction(this, async () => {
    return (await import('../-private/components/three-scene.gjs')).default;
  });

  <template>
    {{#if this.threeScene.isLoading}}
      Loading...
    {{else if this.threeScene.isError}}
      Something went wrong!
    {{else}}
      <this.threeScene.value />
    {{/if}}
  </template>
}
