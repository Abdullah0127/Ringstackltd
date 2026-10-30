import { useState, useMemo } from "react";
import { offers, filterOptions } from "../../data/offers";
import "./Offers.css";

export default function Offers() {
  const [draft, setDraft] = useState({ campaignTypes: [], productTypes: [], industries: [], verticals: [] });
  const [applied, setApplied] = useState(draft);
  const toggle = (group, value) => setDraft(d => ({ ...d, [group]: d[group].includes(value) ? d[group].filter(v=>v!==value) : [...d[group], value] }));
  const filtered = useMemo(() => offers.filter(o => (
    (applied.campaignTypes.length===0 || applied.campaignTypes.includes(o.campaignType)) &&
    (applied.productTypes.length===0 || applied.productTypes.includes(o.productType)) &&
    (applied.industries.length===0 || applied.industries.includes(o.industry)) &&
    (applied.verticals.length===0 || applied.verticals.includes(o.vertical))
  )), [applied]);
  return (
    <main className="offers-page">
      <div className="wrap">
        <h1>Offers</h1>
        <div className="offers-layout">
          <aside className="offers-filters">
            {Object.entries(filterOptions).map(([key, opts]) => (
              <fieldset key={key}>
                <legend>{key}</legend>
                {opts.map(v => (
                  <label key={v}><input type="checkbox" checked={draft[key].includes(v)} onChange={()=>toggle(key,v)} /> {v}</label>
                ))}
              </fieldset>
            ))}
            <button onClick={()=>setApplied(draft)}>Apply Filters</button>
            <button onClick={()=>{const empty={campaignTypes:[],productTypes:[],industries:[],verticals:[]};setDraft(empty);setApplied(empty);}}>Clear</button>
          </aside>
          <section className="offers-list">
            {filtered.length===0 ? <p>No offers match your selected filters.</p> : filtered.map(o => (
              <article className="offer-card" key={o.id}>
                <h3>{o.title}</h3>
                <p>{o.vertical} | {o.productType}</p>
                <p>Payout: {o.payout}</p>
                <a href="https://edmleadnetwork.com/index.php/publishers-sign-in-sign-up/" target="_blank" rel="noreferrer">View Offer</a>
              </article>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
